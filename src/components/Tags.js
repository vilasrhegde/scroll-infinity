import React,{useState,useEffect} from 'react';
import './Tags.css'
function Tags() {

    
  const ENTER = 13;
  const COMMA = 188;
  const BACKSPACE = 8;
  const [tags,setTags] = useState(["Red","Green","Blue"]);
  const [value,setValue] = useState('');

  const handleKeyUp = (e) =>{
    const key = e.keyCode;
    if(key === ENTER || key === COMMA){
      addTag();
    }
  };//up
  const handleKeyDown = (e) =>{
    const key = e.keyCode;
    if(key === BACKSPACE && !value){
      editTag();
    }
  };

  const addTag = () =>{
    let tag = value.trim().replace(/,/g, "");
    if(!tag) return;
    setTags([...tags,tag]);
    setValue("");
    console.log(tag)
  };
  
  const editTag = () => setValue(tags.pop());

  return (
      <>
    <div className="App">
        <div className="nav">
            {tags.map((tag,index) =>(
            <div key={index} className='tag'>
                {tag}
            </div>
            ))}
            <input
            type='text'
            placeholder='Add tags'
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyUp={handleKeyUp}
            onKeyDown={handleKeyDown} />
        </div>
    </div>  
    

      </>
  );
}

export default Tags;
