import React, { useRef, useEffect, useState } from 'react';
import {
  StyledTab,
  StyledTabPanel,
  TabContainer,
  TabsRegion,
  inactiveTab,
  TabSlider,
} from './stylesRegion';

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
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    setContainerHeight(containerRef.current.getBoundingClientRect().height);
  }, [containerRef]);

  const sliderHeight = containerHeight / children.length;

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
      {tabs}
      <TabSlider height={sliderHeight} index={selectedTab} />
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
