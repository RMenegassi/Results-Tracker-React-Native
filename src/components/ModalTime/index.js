import {View, FlatList} from 'react-native';
import React, {useState} from 'react';

import {
  Button,
  Text,
  ContainerModal,
  Modal,
  ButtonModal,
  TextModal,
  ButtonClose,
  TextClose,
} from './styles';

const ModalTime = ({days, setDays}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const daysFilter = [0, 7, 15, 30, 90];

  const chooseDay = day => {
    setDays(day);
    setModalVisible(false);
  };

  return (
    <View>
      <Button onPress={() => setModalVisible(true)}>
        <Text>{days === 0 ? 'Todo Período' : `${days} dias`}</Text>
      </Button>
      <Modal animationType="slide" visible={modalVisible} transparent={true}>
        <ContainerModal>
          <FlatList
            data={daysFilter}
            keyExtractor={item => item.toString()}
            renderItem={({item}) => (
              <ButtonModal onPress={() => chooseDay(item)}>
                <TextModal>
                  {item === 0 ? 'Todo Período' : `${item} dias`}
                </TextModal>
              </ButtonModal>
            )}
          />
          <ButtonClose onPress={() => setModalVisible(false)}>
            <TextClose>Fechar</TextClose>
          </ButtonClose>
        </ContainerModal>
      </Modal>
    </View>
  );
};

export default ModalTime;
