import { createIcon } from "@chakra-ui/icons";

// using `path`
export const LogoIcon = createIcon({
  displayName: "Logo Vr",
  viewBox: "0 0 350.75 254.81",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <>
      <path fill='currentColor' d='M95.94,254.81H0V0H95.94Z' />
      <path
        fill='currentColor'
        d='M222.83,95.94V254.81H126.89V0h0A95.94,95.94,0,0,1,222.83,95.94Z'
      />
      <path
        fill='currentColor'
        d='M350.75,95.94V254.81H254.81V0h0A95.94,95.94,0,0,1,350.75,95.94Z'
      />
    </>
  ),
});
