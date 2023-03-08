import { useDispatch } from "react-redux";
import { ADD } from "../redux/slice/cartSlice";
import { Flex, Image, Text, Badge, Button } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { dataState } from "../redux/types";

const ModalBox = ({
  selected,
  isOpen,
  onClose,
}: {
  selected: dataState;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const dispatch = useDispatch();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{selected.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image
            src={selected.mainImage}
            minW="full"
            maxH="48"
            borderRadius="lg"
          />
          <Flex align="center" justify="space-between" marginTop="2">
            <Badge
              borderRadius="full"
              bg="whatsapp.600"
              maxW="max-content"
              color="white"
              px="2"
            >
              {selected?.spaceCategory}
            </Badge>
            <Text fontSize="xs" fontWeight="semibold" color="gray.500">
              상품번호 : {selected?.idx}
            </Text>
          </Flex>
          <Text fontSize="md" fontWeight="semibold" marginTop="2">
            {selected?.description}
          </Text>
          <Text fontSize="sm">₩ {selected?.price}</Text>
          <Text fontSize="xs" color="gray.600">
            최대 수량 : {selected?.maximumPurchases}
          </Text>
          <Text fontSize="sm" color="gray.700">
            등록일자 : {selected?.registrationDate}
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button
            marginX="1"
            borderLeftRadius="full"
            borderRightRadius="full"
            onClick={() => dispatch(ADD(selected))}
          >
            예약하기
          </Button>
          <Button
            onClick={onClose}
            marginX="1"
            borderLeftRadius="full"
            borderRightRadius="full"
          >
            취소하기
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalBox;
