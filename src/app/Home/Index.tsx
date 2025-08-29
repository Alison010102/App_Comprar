import { useState, useEffect } from "react"
import { View, Image, TouchableOpacity, Alert, Text, FlatList } from "react-native"
import { styles } from "./styles"
import { Button } from "@/components/Button"
import { Item } from "@/components/Item"
import { Input } from "@/components/Input"
import { Filter } from "@/components/Filter"
import { FilterStatus } from "@/types/FilterStatus"

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]


export function Home() {
  const [filter, setFilter] = useState(FilterStatus.PENDING)
  const [description, serDescription] = useState("")
  const [items, setItems] = useState<any>([])

  function handleAdd() {
    if (!description.trim()) {
      return Alert.alert("Adicionar", "Informe a descrição para adicionar")
    }
    const newItem = {
      id: Math.random().toString(36).substring(2),
      description,
      status: FilterStatus.PENDING
    }
  }
  useEffect(()=>{
    console.log("useEffect")
  },[filter,description])

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>

        <Input placeholder="O que você precisa comprar?" />
        <Button title="Adicionar" onPress={handleAdd} />

      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {
            FILTER_STATUS.map((status) => (
              <Filter
                key={status}
                status={status}
                isActive={true}
                onPress={() => update(status)}
              />
            ))
          }

          <TouchableOpacity style={styles.clearButton}>
            <Text>Limpar</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={items}
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

