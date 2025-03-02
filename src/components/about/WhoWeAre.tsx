"use client";
import { whoWeAreData } from "../shared/data";

export default function WhoWeAre() {
  return (
    <main>
      <section>
        <div>
          <h2>Who we Are</h2>
        </div>
        <aside>
          {whoWeAreData.map((item, index) => (
            <div key={index}>
              <h3>{item.title}</h3>
              {item.description && <p>{item.description}</p>}
              {item.list && (
                <ul>
                  {item.list.map((listItem, idx) => (
                    <li key={idx}>
                      <span>{listItem.title}</span> {listItem.description}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </aside>
      </section>
    </main>
  );
}
