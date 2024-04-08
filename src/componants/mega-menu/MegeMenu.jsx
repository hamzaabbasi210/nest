import { useState } from "react";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import { useProductContext } from "../../context/productContext";
import { NavLink } from "react-router-dom";

function MegaMenu() {
  const [megaMenu, setMegaMenu] = useState(false);
  const { Products } = useProductContext();

  return (
    <><div className="z-10" onMouseEnter={() => setMegaMenu(!megaMenu)}
    onMouseLeave={() => setMegaMenu(null)}>
      <button
        className="mega-menu "
        
      >
        <NavLink className="flex items-center justify-center gap-2 text-sm">
          mega menu
          {megaMenu ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
        </NavLink>
      </button>
      {megaMenu === true && (
        <div className="mega-menu-btn static z-10">
          <div className="mega-menu-content w-full left-0 top-[100%] h-max absolute py-4 shadow-md bg-[#ffffff]">
            <div className="row">
              {Products.map((val) => {
                return (
                  <div className="col-3 ">
                    <h1><NavLink to={`/cat/${val.cat_name.toLowerCase()}`}>{val.cat_name}</NavLink></h1>
                    <ul>
                      {val.items.map((val_) => {
                        return <li className="text-sm"><NavLink to={`/cat/${val.cat_name}/${val_.cat_name.toLowerCase().replace(/\s/g,'-')}`}>{val_.cat_name}</NavLink></li>;
                      })}
                    </ul>
                  </div>
                );
              })}
            
              <div className="col-3 h-[30]  bg-red-40 bordr flex justify-end mr-auto">
                <div className="mega-menu-img rounded-md p-0">
                  <div className="mega-menu-img-content mt-4 ml-8 ">
                    <p>HOT DEALS</p>
                    <h2 className="text-2xl font-semibold leading-7 my-[.5rem]">
                      don't miss<br></br> trending
                    </h2>
                    <h3 className="text-[#81B13D] text-2xl font-bold">
                      save to 50%
                    </h3>
                    <button className="py-[12px] px-[17px] bg-[#3bb77d] text-[#ffffff] rounded-md mt-[.5rem]">
                      Shop now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
}

export default MegaMenu;
