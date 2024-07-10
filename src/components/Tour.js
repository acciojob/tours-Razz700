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
            return(<li key={i}>
                <h2>{item.name}</h2>
                <img src={item.image}></img>
                <h3>{item.price}</h3>
                <p>{item.info}{!show[i] && <button onClick={()=>handlemorebutton(i)}>Show more</button>}
                {show[i] && <button onClick={()=>{ handleless(i)}} >See less</button>}</p>
                <button onClick={()=>{ handledelete(i)}}>Delete</button>
            </li>)
        })}
        </ul>
       {empty && <div>All travel packages are deleted  <button onClick={()=>{window.location.reload()}}>Refresh</button></div>
      }
    </div>
  )
}

export default Tour