import BadgeUnstyled, { badgeUnstyledClasses } from '@mui/base/BadgeUnstyled'
import { styled } from '@mui/system'

export const StyledBadge = styled(BadgeUnstyled)`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #ffffff;
  font-size: 14px;
  list-style: none;
  position: relative;
  display: inline-block;
  line-height: 1;

  & .${badgeUnstyledClasses.badge} {
    z-index: auto;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    color: #fff;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    white-space: nowrap;
    text-align: center;
    background: linear-gradient(90deg, #623d90 2.3%, #9f0b00 64.97%);
    border-radius: 10px;
    box-shadow: 0 0 0 1px #fff;
    position: absolute;
    top: 30px;
    left: 11px;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  }

  & .${badgeUnstyledClasses.invisible} {
    opacity: 0;
    pointer-events: none;
  }
`
