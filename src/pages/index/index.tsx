import React, { FC, useCallback, useMemo, useState } from 'react';
import { View } from '@tarojs/components';
import { AtTabBar } from 'taro-ui';

import 'taro-ui/dist/style/components/flex.scss';
import 'taro-ui/dist/style/components/tab-bar.scss';
import 'taro-ui/dist/style/components/badge.scss';

import './index.scss';

const Index: FC = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const tabList = useMemo(
    () => [
      { title: '待办事项', iconType: 'bullet-list', text: 'new' },
      { title: '拍照', iconType: 'camera' },
      { title: '文件夹', iconType: 'folder', text: '100', max: 99 },
    ],
    []
  );

  const handleClick = useCallback((index: number) => {
    setTabIndex(index);
  }, []);

  return (
    <View className="at-col">
      <AtTabBar
        fixed
        tabList={tabList}
        onClick={handleClick}
        current={tabIndex}
      />
    </View>
  );
};

export default Index;
