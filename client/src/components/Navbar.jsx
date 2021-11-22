import React, {useState} from 'react'

const Navbar = ({filterItem, menuList}) => {
    return (
     <>
     <div className="navbar">
            <div className="btn-group">
                {
                    // <img src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/1/versions/simpleenergy-one-standard.jpg?q=80" alt="" />
                    menuList.map((curElem)=>{
                        return (
                            <button className="btn-group__item" key={curElem.category} onClick={()=> filterItem(curElem)}>
                            {curElem}
                            </button>
                        );
                    })
                }
               
            </div>
        </div>
     </>
    )
}


export default Navbar;
