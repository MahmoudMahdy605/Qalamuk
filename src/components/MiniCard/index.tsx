import React, { ReactNode, useEffect, useState } from "react";
import { Stack, Typography, useTheme } from "@mui/material";
import Counter from "react-countup";
import { CalendarOutlined } from "@ant-design/icons";

export const MiniCard = ({
  value,
  text,
  Icon,
}: {
  value: number;
  text: string;
  Icon: any;
}) => {
  const theme = useTheme();
  return (
    <Stack justifyContent={"center"} alignItems={"center"} width={"100%"}>
      <Stack
        width={"190px"}
        p={4}
        borderRadius={2}
        boxShadow={4}
        justifyContent={"center"}
        alignItems={"center"}
        my={3}
      >
        <Icon
          style={{ fontSize: "48px", color: theme.palette.secondary.main }}
        />
        <Stack justifyContent={"center"} alignItems={"center"}>
          <Typography color="primary.main" fontSize={32} fontWeight={"800"}>
            +<Counter duration={2.5} start={1} end={value} />
          </Typography>
          <Typography color={"gray"} fontSize={20} fontWeight={"600"}>
            {text}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
