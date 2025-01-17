import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CustomCheckbox({
  label,
}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity onPress={handleCheckboxChange}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon
          name={isChecked ? 'check-square-o' : 'square-o'}
          size={20}
          color={isChecked ? '#00aced' : '#b4b4b4'}
        />
        <Text style={{ marginLeft: 10 }}>{label}</Text>
      </View>
    </TouchableOpacity>
  );

}
