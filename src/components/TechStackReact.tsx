import React from 'react';

export default function TechStackReact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
      <div className="p-4 border rounded-lg bg-slate-50 dark:bg-slate-800">
        <h3 className="text-lg font-bold mb-2">前端基础</h3>
        <ul className="list-disc list-inside">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-slate-50 dark:bg-slate-800">
        <h3 className="text-lg font-bold mb-2">框架</h3>
        <ul className="list-disc list-inside">
          <li>React</li>
          <li>Vue</li>
          <li>Angular</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-slate-50 dark:bg-slate-800">
        <h3 className="text-lg font-bold mb-2">工具</h3>
        <ul className="list-disc list-inside">
          <li>Webpack</li>
          <li>Git</li>
          <li>VS Code</li>
        </ul>
      </div>
    </div>
  );
}
