import React from 'react';

import AchievementInferencer from '../../commons/achievement/utils/AchievementInferencer';
import { defaultAchievement } from '../../commons/application/ApplicationTypes';
import { Links } from '../../commons/utils/Constants';
import { AchievementAbility, FilterStatus } from './AchievementTypes';

const { achievements: defaultAchievements, goals: defaultGoals } = defaultAchievement;
export const AchievementContext = React.createContext(
  new AchievementInferencer(defaultAchievements, defaultGoals)
);

export enum DeadlineColors {
  RED = '#f00',
  BLACK = '#000'
}

export enum FilterColors {
  BLUE = '#4df',
  WHITE = '#fff'
}

export const achievementAssets = `${Links.sourceAcademyAssets}/achievement`;
export const backgroundUrl = `${achievementAssets}/view-background`;
export const cardBackgroundUrl = `${achievementAssets}/card-background`;
export const coverImageUrl = `${achievementAssets}/cover-image`;

export const getAbilityBackground = (ability: AchievementAbility) => {
  switch (ability) {
    case AchievementAbility.CORE:
      return {
        background: `url(${backgroundUrl}/core.png) no-repeat center/cover`
      };
    case AchievementAbility.EFFORT:
      return {
        background: `url(${backgroundUrl}/effort.png) no-repeat center/cover`
      };
    case AchievementAbility.EXPLORATION:
      return {
        background: `url(${backgroundUrl}/exploration.png) no-repeat center/cover`
      };
    case AchievementAbility.COMMUNITY:
      return {
        background: `url(${backgroundUrl}/community.png) no-repeat center/cover`
      };
    case AchievementAbility.FLEX:
      return {
        background: `url(${backgroundUrl}/flex.png) no-repeat center/cover`
      };
    default:
      return {
        background: ``
      };
  }
};

export const getAbilityColor = (ability: AchievementAbility) => {
  switch (ability) {
    case AchievementAbility.CORE:
      return '#fb0'; // gold
    case AchievementAbility.EFFORT:
      return '#bf6'; // green
    case AchievementAbility.EXPLORATION:
      return '#9ce'; // blue
    case AchievementAbility.COMMUNITY:
      return '#f68'; // pink
    case AchievementAbility.FLEX:
      return '#fff'; // white
    default:
      return '';
  }
};

export const getAbilityGlow = (ability: AchievementAbility) =>
  ability === AchievementAbility.FLEX
    ? {
        border: `1px solid ${getAbilityColor(ability)}`,
        boxShadow: `
          0 0 10px #ff0,   /* yellow */
          -1px 0 9px #f0f, /* magenta */
          1px 0 9px #0ff   /* cyan */`
      }
    : {
        border: `1px solid ${getAbilityColor(ability)}`,
        boxShadow: `0 0 10px ${getAbilityColor(ability)}`
      };

export const getFilterColor = (globalStatus: FilterStatus, ownStatus: FilterStatus) =>
  globalStatus === ownStatus ? FilterColors.BLUE : FilterColors.WHITE;

// Make selected achievements + view and Flex achievements glow
export const handleGlow = (id: number, focusId: number, ability: AchievementAbility) =>
  ability === AchievementAbility.FLEX || id === focusId ? getAbilityGlow(ability) : undefined;

export const xpPerLevel = 1000;
