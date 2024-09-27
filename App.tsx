import React , {useState} from "react";
import { Text, View ,FlatList , Button , Switch } from "react-native";


const data = [
 { id:0 , name:"Acoffe" ,isfavorite: true },
 { id:1 , name:"Bcoffe" ,isfavorite: false},
 { id:2 , name:"Ccoffe" ,isfavorite: false},
 { id:3 , name:"Dcoffe" ,isfavorite: true},
 { id:4 , name:"Ecoffe" ,isfavorite: false},
 { id:5 , name:"Fcoffe" ,isfavorite: false},
]

function App(){
  const [cafeList , setCafeList] = useState(data) ; 
  const [showOnlyFavorites , setShowOnlyFavorites] = useState(false); //sondaki false sadece favorileri goruntuleme anlamında
  function onfavoriteChange(isFavoriteSelected){
    setShowOnlyFavorites(isFavoriteSelected);
    isFavoriteSelected ? //true ysa
    setCafeList(cafeList.filter(cafe => cafe.isfavorite))
    : setCafeList(data) ; //degilse

  }
  return(
<View style={{margin:10}}>
  <Text>
    Favorite Only
  </Text>
  <Switch value={showOnlyFavorites} onValueChange={onfavoriteChange}/>
  <FlatList data={cafeList} renderItem={({item}) => <Text style={{fontSize:25}}>{item.name}</Text>} />

</View>
  );
}
export default App;