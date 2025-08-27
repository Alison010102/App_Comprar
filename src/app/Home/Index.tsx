import { View, Image, TouchableOpacity,Text } from "react-native"
import { styles } from "./styles"
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Filter } from "@/components/Filter"
import { FilterStatus } from "@/types/FilterStatus"
import { Item } from "@/components/Item"

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENGING, FilterStatus.DONE]


export function Home() {
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
              <Filter key={status} status={status} isActive={true} />
            ))
          }

          <TouchableOpacity style={styles.clearButton}>
            <Text>Limpar</Text>
          </TouchableOpacity>
        </View>
        <Item data ={{status: FilterStatus.DONE,description:"Café"}}
        onStatus={()=> console.log("mudar status")}
        onRemove={()=> console.log("Remover")}
        />
      </View>
    </View>

  )
}

