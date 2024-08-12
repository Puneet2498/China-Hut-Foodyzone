import { useEffect, useState } from "react";
import styled from "styled-components"
import SearchResult from "./components/SearchResults/SearchResult";


export const BASE_URL = "http://localhost:9000"
function App() {
  const[data,setData]=useState(null);
  const [filteredData,setFilteredData]=useState(null);
const [loading,setLoading]=useState(false);
const [error,setError]=useState(null);
const[seletedBtn,setSelectedBtn]=useState("all")

 useEffect(()=>{
  const fetchFoodData = async()=>{
    setLoading(true)
    try {
      const response= await fetch(BASE_URL);
    const json= await response.json();
    setData(json);
    setFilteredData(json);
    setLoading(false);
    } catch (error) {
      setError("unable to Fetch Data")
    } 
    
  };
  fetchFoodData();
},[]);
// console.log(data);
const searchFood=(e)=>{
  const searchValue=e.target.value;
  console.log(searchValue);

  if(searchValue==""){
    setFilteredData(null);
  }

  const filter=data?.filter((food)=>
    food.name.toLowerCase().includes(searchValue.toLowerCase())
);
setFilteredData(filter);
};

const filterFood=(type)=>{
if(type=="all"){
  setFilteredData(data);
  setSelectedBtn("all");
  return;

}
const filter=data?.filter((food)=>
  food.type.toLowerCase().includes(type.toLowerCase())
);
setFilteredData(filter);
setSelectedBtn(type);
};

const filterBtns=[
  {
    name:"All",
    type:"all",
  },
  {
    name:"BreakFast",
    type:"breakfast",
  } ,
  {
    name:"Lunch",
    type:"lunch",
  } ,
  {
    name:"Dinner",
    type:"dinner",
  }
]


  
  //fetchFoodData();
  if(error) return <div>{error}</div>
  if(loading) return <div>loading....</div>
  return (
   <>
   <Container>
    <TopContainer>
      <div className="logo">
        <img src="/chlogo.png" alt="logo" height={"200px"} width={"200px"} style={{borderRadius: '100px'}}/>
        </div>
        <div className="search">
        <input onChange={searchFood} type="text" placeholder="Search Food" />
        </div>
    </TopContainer>
    <FilterContainer>
      {
        filterBtns.map((value)=>(
<Button key={value.name} onClick={()=>filterFood(value.type)}>
  {value.name}
  </Button>
        ))}
      
  
    </FilterContainer>
  
   </Container>
   <SearchResult data={filteredData}/>
   </>
  )
}

export default App

export const Container=styled.div`
max-width:1200px;
margin:0px auto;

`;
const TopContainer=styled.section`
min-height:140px;
display:flex;
justify-content:space-between;
padding:16px;
align-item:center;

.search{
input{
    background-color:transparent;
    border:2px solid red;
    color:white;
    border-radius:5px;
    height:40px;
    font-size:16px;
    padding:0 10px;

    }
}
    `;
    const FilterContainer=styled.section`
    display:flex;
    justify-content:center;
    gap:12px;
    padding-bottom: 40px;

    `
   export const Button=styled.button`
   
      background:#ff4343;
      border-radius:5px;
      padding:6px 12px;
    border:none;
    color:white;
    cursor:pointer;
    &:hover{
    background-color:red;
   }
    `
