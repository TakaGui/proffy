import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TeacherList from '../pages/TeacherList';
import FavoritesTeacher from '../pages/FavoritesTeacher';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return (
    <Navigator>
      <Screen name="TeacherList" component={TeacherList} />
      <Screen name="FavoritesTeacher" component={FavoritesTeacher} />
    </Navigator>
  )
}

export default StudyTabs;