function Faq() {
  return (
    <>
      <header
        name="FAQ"
        className="container max-w-screen-2xl mx-auto px-8 mt-15 bg-[#2B6BE7]"
      >
        <h1 className="text-3xl md:text-5xl font-semibold text-white py-10">
          Logistics & Trading Inquiries
        </h1>
        {/* Messages_FAQ */}
        <div className="space-y-4">
          {/* Faq_1 */}
          <div className="collapse collapse-arrow border border-[#E7EFFF]">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold text-white">
              What services does Cube It Solution offer?
            </div>
            <div className="collapse-content text-sm text-white">
              Cube It Solution specializes in logistics management and metal
              trading, providing tailored solutions for efficient supply chain
              operations.
            </div>
          </div>
          {/* Faq_2 */}
          <div className="collapse collapse-arrow border border-[#E7EFFF]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold text-white">
              Where is Cube It Solution located?
            </div>
            <div className="collapse-content text-sm text-white">
              Cube It Solution is based in New Delhi, DL, offering services
              throughout the region with a focus on logistics and metal trading.
            </div>
          </div>
          {/* Faq_3 */}
          <div className="collapse collapse-arrow border border-[#E7EFFF]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold text-white">
              What industries does Cube It Solution serve?
            </div>
            <div className="collapse-content text-sm text-white">
              We cater to various sectors including manufacturing, construction,
              and retail, ensuring their logistics and metal trading needs are
              met effectively.
            </div>
          </div>
          {/* Faq_4 */}
          <div className="collapse collapse-arrow border border-[#E7EFFF]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold text-white">
              What industries does Cube It Solution serve?
            </div>
            <div className="collapse-content text-sm text-white">
              We cater to various sectors including manufacturing, construction,
              and retail, ensuring their logistics and metal trading needs are
              met effectively.
            </div>
          </div>
          {/* Faq_5 */}
          <div className="collapse collapse-arrow border border-[#E7EFFF]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold text-white">
              How do I contact Cube It Solution for a consultation?
            </div>
            <div className="collapse-content text-sm text-white">
              You can reach us via our website or call our New Delhi office to
              schedule a personalized consultation with our experts.
            </div>
          </div>
          {/* Faq_6 */}
          <div className="collapse collapse-arrow border border-[#E7EFFF]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold text-white">
              Does Cube It Solution offer international logistics solutions?
            </div>
            <div className="collapse-content text-sm text-white">
              Yes, we offer international logistics services to meet the
              logistics needs of our clients globally.
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Faq;
