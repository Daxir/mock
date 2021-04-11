import * as React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import tailwind from "tailwind-rn";

const Carousel: React.FunctionComponent<unknown> = () => {
  const [active, setActive] = React.useState(0);

  return (
    <View style={tailwind("flex-row flex")}>
      {["XS", "S", "M", "L", "XL"].map((e, i) => (
        <TouchableOpacity
          key={e}
          style={
            i === active
              ? tailwind(
                  "mr-1 w-9 h-9 flex items-center justify-center bg-blue-800 rounded-lg"
                )
              : tailwind(
                  "mr-1 w-9 h-9 flex items-center justify-center bg-gray-100 rounded-lg"
                )
          }
          onPress={() => setActive(i)}
        >
          <Text
            style={
              i === active ? tailwind("text-white") : tailwind("text-black")
            }
          >
            {e}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Carousel;
