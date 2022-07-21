import React, { useRef, useEffect, useState } from 'react';
import {
  TabContainer,
  StyledTab,
  StyledTabPanel,
  TabsTitle,
  inactiveTab,
  TabSlider,
} from './styles';

export const Tab = ({ label, active, onClick }) => {
  return (
    <StyledTab
      role='tab'
      active={active}
      onClick={onClick}
      inactiveStyle={inactiveTab}
    >
      {label}
    </StyledTab>
  );
};

export const Tabs = ({ selectedTab, onChange, children }) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    setContainerWidth(containerRef.current.getBoundingClientRect().width);
  }, [containerRef]);

  const sliderWidth = containerWidth / children.length;

  const tabs = children.map((child) => {
    const handleClick = (e) => {
      onChange(e, child.props.value);
    };

    return React.cloneElement(child, {
      key: child.props.value,
      active: child.props.value === selectedTab,
      onClick: handleClick,
    });
  });

  return (
    <TabContainer ref={containerRef}>
      <TabsTitle>{tabs}</TabsTitle>
      <TabSlider width={sliderWidth} index={selectedTab} />
    </TabContainer>
  );
};

export const TabPanel = ({ children, value, selectedIndex }) => {
  const hidden = value !== selectedIndex;

  return (
    <StyledTabPanel hidden={hidden} active={!hidden}>
      {children}
    </StyledTabPanel>
  );
};
