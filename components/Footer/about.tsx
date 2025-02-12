import React from "react";
import BionicText from "../BionicText/BionicText";

const About = () => {
  return (
    <div className="flex justify-center p-6 bg-slate-200">
      <div className="w-1/2 text-justify">
        <BionicText
          text="Bionic Reading is a tool that improves reading speed and comprehension by 
        bolding the first few letters that your eyes can focus on, then let your brain 
        complete the rest. You should be able to process words faster since your brain 
        is capable of reading faster than your eyes. However, it may not work for some."
        />
        <br />
        <a
          href="https://www.sciencedirect.com/science/article/pii/S0001691824001811#:~:text=The%20present%20results%20do%20not,in%20slower%20and%20faster%20readers."
          className="italic text-blue-700 underline"
        >
          Snell, J. (2024). No, Bionic Reading does not work. Acta Psychologica,
          247, 104304. https://doi.org/10.1016/j.actpsy.2024.104304
        </a>
        <br />
        <br />
        <BionicText text="This website allows the following:" />
        <ul className="list-disc list-outside">
          <li>
            <BionicText text="Copying in HTML" />
          </li>
          <li>
            <BionicText text="Copying in Text for web-based editors (Gmail, Notion, or Google Docs)" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
