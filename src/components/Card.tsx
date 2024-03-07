const Card = () => {
  return (
    <div className="min-[426px]:grid grid-cols-2 max-w-[650px] max-[426px]:px-5 max-[426px]:py-16">
      <div className="col-span-full bg-TitanWhite p-10 max-[426px]:p-5 rounded-t-lg">
        <h2 className="text-Cyan font-bold text-2xl max-[426px]:text-xl mb-5">
          Join our community
        </h2>
        <h3 className="text-BrightYellow font-bold text-xl mb-3 max-[426px]:text-base">
          30-day,hassle-free money back guarantee
        </h3>
        <p className="text-GrayishBlue text-[15px]/7 font-normal text-pretty">
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills
        </p>
      </div>
      <div className="row-start-2 bg-Cyan p-10 max-[426px]:p-5 rounded-bl-lg max-[426px]:rounded-none">
        <h3 className="text-LightGray font-bold text-lg mb-3">
          Monthly Subscription
        </h3>
        <div className="flex mb-1">
          <h3 className="text-LightGray font-bold text-4xl">$29</h3>
          <p className="text-LightGray font-normal text-base my-auto mx-2">
            per month
          </p>
        </div>
        <p className="text-LightGray text-base font-normal mb-10">
          Full access for less then $1 a day
        </p>
        <button className="text-LightGray text-lg font-bold bg-BrightYellow px-5 py-3 rounded-lg w-full">
          Sign Up
        </button>
      </div>
      <div className="row-start-2 bg-BrightCyan p-10 max-[426px]:p-5 rounded-br-lg max-[426px]:rounded-b-lg">
        <h3 className="text-LightGray font-bold text-lg mb-3">Why Us</h3>
        <ul className="text-LightGray space-y-0">
          <li>Tutorials by industry experts</li>
          <li>Peer & expert code review</li>
          <li>Coding exercises</li>
          <li>Access to our Github repos</li>
          <li>Community forum</li>
          <li>Flashcard decks</li>
          <li>New videos every week</li>
        </ul>
      </div>
    </div>
  );
};
export default Card;
