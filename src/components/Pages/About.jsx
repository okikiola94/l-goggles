
export const Contact = () => {
  return (
    <section id="contact" className="text-start flex flex-col gap-4">
      <h4>Let’s Build the Future Together</h4>
      <p className="text-sm text-pretty text-[#d9d9d9]">
        Technology is more than just a tool; it’s a gateway to endless
        possibilities. Join me in this journey to innovate, create, and
        transform. Explore my portfolio, learn about my projects, and see how we
        can collaborate to bring your ideas to life.
      </p>

      <div className="hidden md:flex gap-[2rem] text-xs text-[#737373] items-center">
        <li className="nav-item">
          <a href="mailto:farominiyiopeyemi@gmail.com">Contact Me</a>
        </li>
        <li className="nav-item">
          <a href="https://www.linkedin.com/in/kikydev/">Linkedin</a>
        </li>
        <li className="nav-item">
          <a href="https://github.com/okikiola94">Github</a>
        </li>
      </div>
    </section>
  );
};
