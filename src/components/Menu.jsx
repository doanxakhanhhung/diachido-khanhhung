const menus=[

{icon:"📍",name:"Địa chỉ đỏ"},

{icon:"🗺️",name:"Bản đồ"},

{icon:"📷",name:"Thư viện"},

{icon:"🎥",name:"Video"}

]

function Menu(){

return(

<section className="menu">

{

menus.map((item,index)=>(

<div className="card" key={index}>

<div className="icon">

{item.icon}

</div>

<h3>

{item.name}

</h3>

</div>

))

}

</section>

)

}

export default Menu