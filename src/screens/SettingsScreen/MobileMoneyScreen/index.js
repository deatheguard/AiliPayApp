import { StyleSheet, Text, View } from "react-native";
import AccountSettingsHeader from "../../components/AccountsSettingsHeader";
import PaymentDetailsBox from "../../components/PaymentDetailsBox";
import UpdateInformation from "../../components/UpdateInformation";
import { useTranslation } from "react-i18next";

export default function MobileMoneyScreen({ navigation }) {
  const {t} = useTranslation()
  return (
    <View style={styles.container}>
      {/* ----------------------header navigation container -------------*/}

      <AccountSettingsHeader headerTitle={t('mobileMoney.title')} navigation={navigation} />

      {/* ----------------------Payment detatils box container----------------- */}
      <View style={styles.debitCardContainer}>
        <Text style={styles.infoTitle}>{t('mobileMoney.header')}</Text>
        <View style={styles.debitCardContent}>
          <View>
            <PaymentDetailsBox
              paymentType="MTN MoMo"
              lastDigits="XXX8"
              primaryStatus={t('mobileMoney.status')}
              validationStatus="Valid"
            />
            <PaymentDetailsBox
              paymentType="MTN MoMo"
              lastDigits="XXX9"
              primaryStatus={t('mobileMoney.status')}
              validationStatus="Invalid"
            />
          </View>
        </View>
      </View>

      {/* -----------------add payment details button container---------------- */}
      <UpdateInformation editValue="Momo" />
      {/* <View style={styles.buttonContainer}>
        <CustomButton
          title="Add Mobile Money Account"
          color="white"
          backgroundColor="#063B87"
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: "white",
    flexDirection: "column",
  },
  buttonContainer: {
    // flex: 2,
    padding: 20,
    width: "100%",
  },
  cardBox: {
    marginTop: 20,
  },
  debitCardContainer: {
    // flex: 6,
    // flexDirection: "column",
    // alignItems: "center",
    alignItems: "center",
    // alignItems: "center",
    alignItems: "center",
    // margin: 20,
    marginTop: 30,
  },
  debitCardContent: {
    marginTop: 30,
    alignItems: "stretch",
    // marginLeft: 20,
    // marginRight: 20,
    // marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "column",
    width: "100%",
    marginTop: 30,
    alignItems: "stretch",
    // marginLeft: 20,
    // marginRight: 20,
    // marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "column",
    width: "100%",
  },
  infoTitle: {
    fontWeight: 600,
    fontSize: 23,
    textAlign: 'center',
    marginTop: 40,
    textAlign: 'center',
    marginTop: 40,
  },
});