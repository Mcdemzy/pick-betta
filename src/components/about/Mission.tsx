"use client";
import { missionData } from "../shared/data";

export default function Mission() {
  return (
    <main>
      <section>
        <div>Mission</div>
        <aside>
          {missionData.map((item, index) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <ol>
                {item.list.map((listItem, idx) => (
                  <li key={idx}>
                    {listItem.title}
                    <ul>
                      {listItem.subList.map((subItem, subIdx) => (
                        <li key={subIdx}>{subItem}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </aside>
      </section>
    </main>
  );
}
