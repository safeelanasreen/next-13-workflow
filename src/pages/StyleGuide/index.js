import styles from "./Styleguide.module.scss";
const StyleGuidePage = () => {
  return (
    <div className="mt-[100px]">
      <div className="container m-auto">
        {/* colors */}

        <section className="box">
          <h3 class="font-bold text-[32px] mb-6">Colors</h3>
          <div className="item-wrp">
            <div className="flex">
              <div className="color-item">
                <div className="color-view bg-primary-900 w-[100px] h-[50px] rounded-sm mr-8"></div>
                <div className="color-classname text-sm text-black mt-4">
                  primary
                </div>
              </div>
              <div className="color-item">
                <div className="color-view bg-seccondary w-[100px] h-[50px] rounded-sm mr-8"></div>
                <div className="color-classname text-sm mt-4">seccondary </div>
              </div>
              <div className="color-item">
                <div className="color-view bg-slate w-[100px] h-[50px] rounded-sm mr-8"></div>
                <div className="color-classname text-sm mt-4">slate</div>
              </div>
              <div className="color-item">
                <div className="color-view bg-safronGreen w-[100px] h-[50px] rounded-sm mr-8"></div>
                <div className="color-classname text-sm mt-4">safronGreen</div>
              </div>
              <div className="color-item">
                <div className="color-view bg-levender w-[100px] h-[50px] rounded-sm mr-8"></div>
                <div className="color-classname text-sm mt-4">levender</div>
              </div>
              <div className="color-item">
                <div className="color-view bg-bubblegum w-[100px] h-[50px] rounded-sm mr-8"></div>
                <div className="color-classname text-sm mt-4">bubblegum</div>
              </div>
              <div className="color-item">
                <div className="color-view bg-copperRust w-[100px] h-[50px] rounded-sm mr-8"></div>
                <div className="color-classname text-sm mt-4">copperRust</div>
              </div>
              <div className="color-item">
                <div className="color-view bg-black w-[100px] h-[50px] rounded-sm mr-8"></div>
                <div className="color-classname text-sm mt-4">Black</div>
              </div>
            </div>
          </div>
        </section>

        {/* Box Shadow */}
        <section className="boxshadow mt-[100px]">
          <h3 class="font-bold text-[32px] mb-6">Shadow</h3>
          <div className="flex">
            <div className="p-8 shadow-wrap w-[520px] h-[200px] bg-[#EFF4F9] flex items-center justify-center">
              <div className="shadow-box w-[100px] h-[100px] rounded-sm bg-white shadow-sm"></div>
              <div className="value ml-6">
                <p className="font-bold">shadow-sm</p>
                <p>0px 2px 4px 0px rgba(11, 10, 55, 0.15)</p>
              </div>
            </div>
            <div className="ml-8 p-8 shadow-wrap w-[520px] h-[200px] bg-[#EFF4F9] flex items-center justify-center">
              <div className="shadow-box w-[100px] h-[100px] rounded-sm bg-white shadow-lg"></div>
              <div className="value ml-6">
                <p className="font-bold">shadow-lg</p>
                <p>0px 8px 20px 0px rgba(18, 16, 99, 0.06)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Border */}
        <section className="box-border mt-[100px]">
          <h3 class="font-bold text-[32px] mb-6">Border radius</h3>
          <div className="flex">
            <div className=" rounded-sm p-8 shadow-wrap w-[100px] h-[100px] bg-levender flex items-center justify-center"></div>
            <div className=" rounded-md p-8 ml-8 shadow-wrap w-[100px] h-[100px] bg-levender flex items-center justify-center"></div>
            <div className="rounded-lg p-8 ml-8 shadow-wrap w-[100px] h-[100px] bg-levender flex items-center justify-center"></div>
            <div className="rounded-full p-8 ml-8 shadow-wrap w-[100px] h-[100px] bg-levender flex items-center justify-center"></div>
          </div>
        </section>

        {/* Typo graphy */}
        <section className="box-typography mt-[100px]">
          <h3 class="font-bold text-[32px] mb-6">Typography</h3>
          <div className="ttl-wrap">
            <h4 class="font-bold  mb-6">Heading</h4>
            <div className="box items-end mb-[100px]">
              <div className="dicription">
                <h1 className="text-bold">H1</h1>
                <p className="uppercase">40px / 55px</p>
              </div>
              <div className="view-area">
                <h1>Lorem ipsum dolor sit amet</h1>
              </div>
            </div>
            <div className="box items-end mb-[100px]">
              <div className="dicription">
                <h2 className="text-bold">H2</h2>
                <p className="uppercase">40px / 55px</p>
              </div>
              <div className="view-area">
                <h2>Lorem ipsum dolor sit amet</h2>
              </div>
            </div>
          </div>
        </section>

        {/* <h1 className="text-primary-900"> Colors</h1>
        <h1 className="text-seccondary"> Colors</h1>
        <h1 className="text-s1"> Colors</h1>
        <h1 className="text-base"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis quam, enim aperiam incidunt, in ex autem rem tempora asperiores debitis quia quis velit nesciunt esse ipsam necessitatibus earum consequuntur.</h1>
        <div className="title-colors_box">
          <ul className='mt-4'>
            <li><p className="laptop:text-base">Lorem ipsum dolor sit</p></li>
            <li><p className="laptop:text-xxl">Lorem ipsum dolor sit</p></li>
            <li><p className="text-lg">Lorem ipsum dolor sit</p></li>
            <li><p className="text-xl">Lorem ipsum dolor sit</p></li>
            <li><p className="text-xxl">Lorem ipsum dolor sit</p></li>
          </ul>
        </div> */}

        {/* <div className="flex">
          <div className="cox bg-primary-900 p-lg text-white text-lg font-bold">abc</div>
          <div className="cox mt-5 bg-primary-900 p-lg text-white text-lg font-bold">abc</div>
        </div> */}
      </div>
    </div>
  );
};

export default StyleGuidePage;
