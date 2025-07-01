import { useEffect, useState } from 'react';

function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div>
      <h2 className="mb-4">Karya & Proyek</h2>
      <p className="mb-4">
        Berikut ini adalah beberapa proyek yang pernah saya kerjakan. Saya selalu berusaha menggabungkan fungsionalitas, kecepatan, dan desain yang user-friendly dalam setiap aplikasi yang saya bangun.
      </p>

      <div className="row">
        {projects.map((project) => (
          <div className="col-md-4 mb-4" key={project.id}>
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {projects.length === 0 && (
        <p className="text-muted mt-4">
          Tidak ada data proyek untuk ditampilkan saat ini. Silakan cek kembali nanti, ya!
        </p>
      )}
    </div>
  );
}

export default Portfolio;
