import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, UseDispatch, useSelector } from "react-redux";
import { addItemToFavourite, BasketItem  } from "@/app/statemangement/useBasketStore";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import { products } from "@/utils/data";
import { RootState } from "@/app/statemangement/useBasketStore"

interface Props {
  itemId: number;
  size?: number;
  isLiked: boolean;
  setIsLiked: (op: boolean) => void;
}
const LikeIcon = ({ itemId, size, isLiked, setIsLiked }: Props) => {
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.basket.favouriteItems);
  

  const handleLikedItem = () => {
    dispatch(addItemToFavourite({id: 1, category: "test", name: "test", isLiked: true, price:0, quantity: 0, url: 20}))
  };
  return (
    <TouchableOpacity
      onPress={() => {
        handleLikedItem();
        setIsLiked(isLiked);
      }}
    >
      <MaterialCommunityIcons
        name={isLiked ? "heart" : "heart-outline"}
        size={size ?? 24}
        color={isLiked ? "red" : "black"}
      />
    </TouchableOpacity>
  );
};

export default LikeIcon;
