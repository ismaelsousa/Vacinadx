sha1:
	cd android && cd app && keytool -keystore ./debug.keystore -list -v

create-keystore:
	keytool -genkey -v -keystore debug.keystore -alias androiddebugkey -storepass android -keypass android -keyalg RSA -validity 10000
