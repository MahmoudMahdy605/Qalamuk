import React, { ReactNode, useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
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
  return (
    <Stack
      width={"100%"}
      height={80}
      boxShadow={"revert"}
      justifyContent={"center"}
      alignItems={"center"}
      my={3}
    >
      <Icon style={{ fontSize: "48px" }} />
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Typography color="primary.main" fontSize={32} fontWeight={"800"}>
          +<Counter duration={2.5} start={1} end={value} />
        </Typography>
        <Typography color={"gray"}>{text}</Typography>
      </Stack>
    </Stack>
  );
};
