export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">About Me</h1>
      
      <div className="prose prose-lg">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Background</h2>
          <p className="text-gray-700 mb-4">
            I&apos;m a software developer passionate about building 
            user-delighting applications and solving complex problems.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Backend</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>.NET</li>
                <li>Python</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Tools</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Git</li>
                <li>Docker</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Software Engineer - Docusign Inc.</h3>
              <p className="text-gray-600">Jan. 2024 - Present</p>
              <p className="text-gray-700 mt-2">
                Backend engineering for all things related to Reporting
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Senior Software Engineer - Trellix</h3>
              <p className="text-gray-600">Aug. 2023 - Dec. 2023</p>
              <p className="text-gray-700 mt-2">
                Moving McAfee Enterprise applications to Trellix-owned GCP infra
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 