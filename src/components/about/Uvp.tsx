"use client";
import { uvpData } from "../shared/data";

export default function UVP() {
  return (
    <main>
      <section>
        <div>{uvpData.title}</div>
        <aside>
          <div>
            <h3>Why PickBetta?</h3>
            <ul>
              {uvpData.list.map((item, index) => (
                <li key={index}>
                  <span>{item.title}</span> {item.description}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}
