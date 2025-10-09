import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";

import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image4 from "./assets/image4.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { Gap } from "@alfalab/core-components/gap";

const longRead = "alfabank://longread?endpoint=v1/adviser/longreads/77414";

const Redirect = () => {
  window.location.href = longRead;

  return null;
};

export const App = () => {
  const submit = () => {
    window.gtag("event", "6076_get_sub", {
      variant_name: "6076_2",
    });

    LS.setItem(LSKeys.ShowThx, true);
  };

  if (LS.getItem(LSKeys.ShowThx, false)) {
    return <Redirect />;
  }

  return (
    <>
      <div className={appSt.container}>
        <img
          src={image1}
          alt="Картинка Альфа-Смарт"
          style={{ borderRadius: "16px" }}
        />

        <Gap size={8} />

        <Typography.Title tag="h1" view="small" weight="bold">
          Образовательная игра за покупку детской картой
        </Typography.Title>

        <Gap size={16} />

        <Typography.Text>
          За оплату детской картой — подарим ребёнку курс образовательную игру в
          приложении
        </Typography.Text>

        <Gap size={32} />

        <Typography.Title tag="h1" view="xsmall" weight="bold">
          Как получить
        </Typography.Title>

        <Gap size={16} />

        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <img src={image2} alt="" width={48} height={48} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography.Text view="primary-small">
              Ребёнку нужно оплатить покупку
            </Typography.Text>
            <Typography.Text color="secondary" view="primary-small">
              Своей картой и на любую сумму — в магазине, онлайн или через
              приложение
            </Typography.Text>
          </div>
        </div>

        <Gap size={32} />

        <Typography.Title tag="h1" view="xsmall" weight="bold">
          Подарок ребёнку
        </Typography.Title>

        <Gap size={16} />

        <div style={{ display: "flex", gap: "16px" }}>
          <img src={image4} alt="" width={48} height={48} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography.Text view="primary-small">
              Ребёнку нужно оплатить покупку
            </Typography.Text>
            <Gap size={4} />
            <Typography.Text view="primary-small" color="secondary">
              - Разумным тратам
            </Typography.Text>
            <Typography.Text view="primary-small" color="secondary">
              - Накоплениям
            </Typography.Text>
            <Typography.Text view="primary-small" color="secondary">
              - Экономии
            </Typography.Text>
          </div>
        </div>
      </div>

      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile block view="primary" href={longRead} onClick={submit}>
          Хотим участвовать!
        </ButtonMobile>
      </div>
    </>
  );
};
