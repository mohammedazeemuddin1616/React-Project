export default function Person({name,age}){
    return<div>
   <h2>{name}</h2>
   <h2>{age}</h2>
   {
    age>26?
    <h4>old</h4>:
    <h4>young</h4>
   }
    </div>;
}