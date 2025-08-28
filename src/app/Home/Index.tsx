import { useState } from "react"
import { View, Image, TouchableOpacity, Text, FlatList } from "react-native"
import { styles } from "./styles"
import { Button } from "@/components/Button"
import { Item } from "@/components/Item"
import { Input } from "@/components/Input"
import { Filter } from "@/components/Filter"
import { FilterStatus } from "@/types/FilterStatus"

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]
const ITEMS = [
  { id: "1", status: FilterStatus.DONE, description: "1 pacote de nescau" },
  { id: "2", status: FilterStatus.DONE, description: "3 pacote de macarrao" },
  { id: "3", status: FilterStatus.DONE, description: "3 cebolas" },

]

export function Home() {
  const [filter, setFilter]= useState(FilterStatus.PENDING)

  function update(value:FilterStatus){
    setFilter(value)
  }
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>

        <Input placeholder="O que você precisa comprar?" />
        <Button title="Entrar" />

      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {
            FILTER_STATUS.map((status) => (
              <Filter
               key={status} 
               status={status} 
               isActive={true} 
               onPress={()=> update(status)}
               />
            ))
          }

          <TouchableOpacity style={styles.clearButton}>
            <Text>Limpar</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={ITEMS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onStatus={() => console.log("mudar status")}
              onRemove={() => console.log("Remover")}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => <Text style={styles.empty}>Nenhum Item aqui</Text>}
        />
      </View>
    </View>

  )
}

