"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
const react_native_1 = require("react-native");
function Home() {
    return (<react_native_1.View style={styles.container}>
            <react_native_1.Text>Unit Lens - Frontend Skeleton</react_native_1.Text>
        </react_native_1.View>);
}
const styles = react_native_1.StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
