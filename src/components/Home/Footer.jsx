import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white pt-16">
      <div className="flex px-10">
        <div className="mr-20">
          <p className="px-8 py-3 font-unbounded font-bold bg-mainColor w-fit mb-10">
            Subscription
          </p>
          <h2 className="text-[3rem] font-unbounded font-bold max-w-[45rem] mb-10">
            RECEIVE PROPERTY NEWS AND INSIGHTS
          </h2>
          <p className="text-sm max-w-[60rem] mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            deleniti nemo iusto, sit provident veritatis enim quisquam expedita
            dolor debitis consectetur quas tempore ex. Iste, autem id,
            consequuntur debitis quasi et modi mollitia recusandae aliquam nisi
            ea dolorem numquam cumque provident, ullam laudantium quos iure
            nulla quia! Totam, molestiae! Repellat.
          </p>
          <div className="flex gap-10 mb-10">
            <input
              className="bg-black w-full border-b-2 border-white outline-none"
              placeholder="Enter Your email here"
              type="email"
            />
            <img src="/images/Home/locationIcon.svg" alt="Location" />
          </div>
        </div>
        <div>
          <p className="font-unbounded font-bold text-[1.5rem] mb-8">
            Information
          </p>
          <ul className="mb-20">
            <li className="mb-2">Beb Ezzouar</li>
            <li className="mb-2">+213 59483223</li>
            <li className="mb-2">user@gmail.com</li>
            <li className="mb-2">9:00 AM - 7:00 PM</li>
          </ul>

          <p className="font-unbounded font-bold text-[1.5rem] mb-8">
            Information
          </p>
          <ul>
            <li className="mb-2">Beb Ezzouar</li>
            <li className="mb-2">+213 59483223</li>
            <li className="mb-2">user@gmail.com</li>
            <li className="mb-2">9:00 AM - 7:00 PM</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
