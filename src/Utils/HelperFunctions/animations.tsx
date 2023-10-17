import { keyframes } from "@mui/material";

export const lightFlickering = () => {
   return keyframes`
  0% {
    opacity: 1;
  }
  10%, 30%, 50%, 70%, 90% {
    opacity: 0.2;
  }
  20%, 40%, 60%, 80% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;
};

export const avatarAnimation = () => {
   return keyframes`
0% {
  opacity: 1;
}
60%, 64%, 68% {
 opacity: 1;
}
 62%, 66% {
  opacity: 0.8;
}
100% {
  opacity: 1;
}
`;
};

export const widthChange = () => {
   return keyframes`
0% {
 width: 100%;
}
50% {
  width: 120%;
}
100% {
  width: 100%;
}
`;
};
