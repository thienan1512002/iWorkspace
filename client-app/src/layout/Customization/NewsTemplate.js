import { useState } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

// project imports
import useConfig from "hooks/useConfig";
import SubCard from "ui-component/cards/SubCard";

const NewsTemplate = () => {
  const theme = useTheme();
  const { NewsTemplate, onChangeNewsTemplate } = useConfig();

  let initialTemplate;
  switch (NewsTemplate) {
    case 1:
      initialTemplate = 1;
      break;
    case 2:
      initialTemplate = 2;
      break;
    default:
      break;
  }

  // state - font family
  const [choice, setChoice] = useState(initialTemplate);

  const handleFont = (event) => {
    setChoice(event.target.value);
    onChangeNewsTemplate(event.target.value);
  };

  return (
    <SubCard title="Giao diện tin tức">
      <FormControl>
        <RadioGroup
          aria-label="font-family"
          value={choice}
          onChange={handleFont}
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value={1}
            control={<Radio />}
            label="Dạng mặc định"
            sx={{
              "& .MuiSvgIcon-root": { fontSize: 28 },
              "& .MuiFormControlLabel-label": {
                color: theme.palette.grey[900],
              },
            }}
          />
          <FormControlLabel
            value={2}
            control={<Radio />}
            label="Dạng bảng (table)"
            sx={{
              "& .MuiSvgIcon-root": { fontSize: 28 },
              "& .MuiFormControlLabel-label": {
                color: theme.palette.grey[900],
              },
            }}
          />
        </RadioGroup>
      </FormControl>
    </SubCard>
  );
};

export default NewsTemplate;
