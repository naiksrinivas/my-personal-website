export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">About Me</h1>
      
      <div className="prose prose-lg">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Background</h2>
          <p className="text-gray-700 mb-4">
            I&apos;m a software developer passionate about building 
            user-friendly applications and solving complex problems.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Frontend</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Backend</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Node.js</li>
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
              <h3 className="font-semibold">Senior Developer - Company Name</h3>
              <p className="text-gray-600">2020 - Present</p>
              <p className="text-gray-700 mt-2">
                Brief description of your role and key achievements.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Software Engineer - Previous Company</h3>
              <p className="text-gray-600">2018 - 2020</p>
              <p className="text-gray-700 mt-2">
                Brief description of your role and key achievements.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 