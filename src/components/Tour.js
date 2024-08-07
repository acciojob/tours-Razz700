import React, { useRef, useState } from 'react'

const Tour = (props) => {
    const [empty,setempty]=useState(false);
  const temp= props.data.map(item => {
    return(
        {
            ...item,
            info:item.info.slice(0,200)
        })
});
console.log(temp);
    const [data,setdata]=useState(temp);
   
    let [show,setshow]=useState([]);
    for (let index = 0; index < data.length; index++) {
        show=[...show,false];
    }
    console.log(show);

    const handlemorebutton=(i)=>{
    setshow(show=>{show[i]=true;
        return show
    });
   const temp1=data.map((item,j) => {
    if (j==i) {
        return({
            ...item,
            info:props.data[j].info
        }) 
    }else{
        return item;
    }
    });
    setdata(temp1);
    }
    const handleless=(i)=>{
        setshow(show=>{show[i]=false;
            return show
        });
       const temp1=data.map((item,j) => {
        if (j==i) {
            return({
                ...item,
                info:temp[j].info
            }) 
        }else{
            return item;
        }
        });
        setdata(temp1);
    }
    const handledelete=(i)=>{
        setshow(show=>{
            const temp3=show.filter((elem,k)=>{
            if (k!=i) {
                return elem;
            }
            });
           // console.log(show);
            return temp3
        });
       const temp1=data.filter((item,j) => {
        if (i!=j) {
            return item
        }});
        if (temp1.length==0) {
            setempty(true);
        }
        setdata(temp1);
        console.log(temp1);
    }
    
    
  return (
    <div>
        <ul>
        {data.map((item,i)=>{
            if (i==data.length-1) {
                setTimeout(()=>{
                    props.setcheck(false);
                },1000);
            }
            return(<li key={i} className='single-tour' >
                <h2 className='title'>{item.name}</h2>
                <img src={item.image}></img>
                <h3 className='tour-price'>{item.price}</h3>
                <p className='tour-info' id={'tour-item-para-'+item.id}>{item.info}{!show[i] && <button id={'see-more-'+item.id} onClick={()=>handlemorebutton(i)}>See more</button>}
                {show[i] && <button id={'see-more-'+item.id} onClick={()=>{ handleless(i)}} >Show less</button>}</p>
                <button id={'delete-btn-'+item.id} className='delete-btn' onClick={()=>{ handledelete(i)}}>Delete</button>
            </li>)
        })}
        </ul>
       {empty && <div>No tours left <button className='btn' onClick={()=>{window.location.reload()}}>Refresh</button></div>
      }
    </div>
  )
}

export default Tour