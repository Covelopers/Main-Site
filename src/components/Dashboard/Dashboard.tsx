import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import "./Dashboard.css";

type Project = {
  id: string;
  name: string;
  description: string | null;
  status: "in_dev" | "completed" | "future";
  tech_stack: string[] | null;
  url: string | null;
  image_url: string | null;
  display_order: number | null;
  visible: boolean;
};

const SECTIONS: { key: Project["status"]; label: string }[] = [
  { key: "completed", label: "Completed" },
  { key: "in_dev", label: "In Development" },
  { key: "future", label: "Future" },
];

export function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("projects")
      .select("*")
      .eq("visible", true)
      .order("display_order", { ascending: true })
      .then(({ data }) => {
        setProjects(data ?? []);
        setLoading(false);
      });
  }, []);

  const byStatus = (key: Project["status"]) =>
    projects.filter((p) => p.status === key);

  const maxRows = Math.max(...SECTIONS.map(({ key }) => byStatus(key).length), 0);

  return (
    <section id="dashboard" className="dashboard">
      <div className="dashboard-inner">
        <h2>Projects</h2>
        <p className="dashboard-subtitle">
          A look at what we're building, what's shipped, and what's next.
        </p>

        {loading ? (
          <div className="dashboard-loading">Loading projects…</div>
        ) : (
          <div className="dashboard-grid">
            {/* Headers */}
            {SECTIONS.map(({ key, label }) => (
              <div key={key} className={`column-header column-header--${key}`}>
                <span className={`status-dot status-dot--${key}`} />
                <h3>{label}</h3>
                <span className="column-count">{byStatus(key).length}</span>
              </div>
            ))}

            {/* Card rows — one slot per column per row */}
            {Array.from({ length: maxRows }).map((_, i) =>
              SECTIONS.map(({ key }) => {
                const project = byStatus(key)[i];
                return project ? (
                  <div key={project.id} className="project-card">
                    {project.image_url && (
                      <img
                        src={project.image_url}
                        alt={project.name}
                        className="project-image"
                      />
                    )}
                    <div className="project-body">
                      <div className="project-title-row">
                        <h4>{project.name}</h4>
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            aria-label={`Visit ${project.name}`}
                          >
                            ↗
                          </a>
                        )}
                      </div>
                      {project.description && (
                        <p className="project-description">
                          {project.description}
                        </p>
                      )}
                      {project.tech_stack && project.tech_stack.length > 0 && (
                        <div className="tech-tags">
                          {project.tech_stack.map((tech) => (
                            <span key={tech} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div key={`${key}-empty-${i}`} className="project-card project-card--empty" />
                );
              })
            )}
          </div>
        )}
      </div>
    </section>
  );
}
