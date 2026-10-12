import React from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function DashboardScreen() {
  const favorites = [
    { name: "Bananas" },
    { name: "Cereal" },
    { name: "Chili Peppers" },
    { name: "Cabbage" },
    { name: "Snacks" },
    { name: "Tomatoes" },
  ];

  const stores = [
    { name: "Superstore" },
    { name: "NOFRILLS" },
    { name: "CALGARY CO-OP" },
    { name: "Walmart" },
    { name: "Sobeys" },
    { name: "Safeway" },
  ];

  const deals = [
    { title: "Organic Tomatoes", price: "$3.38", tag: "Fresh" },
    { title: "Green Chile Peppers", price: "$1.00/lb", tag: "Sale" },
    { title: "Yellow Bell Peppers", price: "$1.50", tag: "Best Price" },
    { title: "9pc Sponges", price: "$4.25", tag: "Essential" },
  ];

  const storeComparisons = [
    { name: "Superstore", total: "$12.40", lowest: true, badge: "Best Value" },
    { name: "NOFRILLS", total: "$13.15", lowest: false, badge: "Close 2nd" },
    { name: "Walmart", total: "$14.20", lowest: false, badge: "" },
    { name: "Calgary Co-op", total: "$15.80", lowest: false, badge: "" },
  ];

  return (
    <View style={styles.container}>
      {/* Header Navigation */}
      <View style={styles.header}>
        <View style={styles.logoGroup}>
          <Text style={styles.logo}>Kavyo</Text>
          <Text style={styles.subLogo}>Grocery</Text>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search groceries, stores, or deals..."
            placeholderTextColor="#9CA3AF"
            style={styles.searchInput}
          />
        </View>

        <TouchableOpacity style={styles.cartButton} activeOpacity={0.8}>
          <Text style={styles.cartButtonText}>Cart</Text>
        </TouchableOpacity>
      </View>

      {/* Main Layout */}
      <View style={styles.mainLayout}>
        {/* Left Column */}
        <ScrollView
          style={styles.leftColumn}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.sectionTitle}>Quick Favorites</Text>
          <FlatList
            horizontal
            data={favorites}
            keyExtractor={(_, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.rowContent}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.favCard} activeOpacity={0.8}>
                <Text style={styles.favCardText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />

          <Text style={styles.sectionTitle}>Popular Stores</Text>
          <FlatList
            horizontal
            data={stores}
            keyExtractor={(_, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.rowContent}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.storeCard} activeOpacity={0.8}>
                <Text style={styles.storeText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />

          <Text style={styles.sectionTitle}>Weekly Deals</Text>
          <FlatList
            horizontal
            data={deals}
            keyExtractor={(_, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.rowContent}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.dealCard} activeOpacity={0.8}>
                <View style={styles.dealHeader}>
                  <Text style={styles.dealBadge}>{item.tag}</Text>
                </View>
                <View>
                  <Text style={styles.dealTitle} numberOfLines={1}>
                    {item.title}
                  </Text>
                  <Text style={styles.dealPrice}>{item.price}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </ScrollView>

        {/* Right Sidebar */}
        <View style={styles.rightSidebar}>
          <View>
            <Text style={styles.sidebarTitle}>Best Store Routes</Text>
            <Text style={styles.sidebarSubtitle}>
              Based on your current basket
            </Text>

            <View style={styles.savingsBanner}>
              <Text style={styles.savingsText}>
                <Text style={{ fontWeight: "bold" }}>TIP: </Text>
                You save <Text style={{ fontWeight: "800" }}>$3.40</Text> by
                shopping at Superstore today!
              </Text>
            </View>

            <View style={styles.comparisonList}>
              {storeComparisons.map((store, index) => (
                <View
                  key={index}
                  style={[
                    styles.comparisonCard,
                    store.lowest && styles.lowestComparisonCard,
                  ]}
                >
                  <View style={styles.storeMeta}>
                    <Text style={styles.comparisonStoreName}>{store.name}</Text>
                    {store.badge ? (
                      <Text
                        style={[
                          styles.storeBadge,
                          store.lowest && styles.lowestBadge,
                        ]}
                      >
                        {store.badge}
                      </Text>
                    ) : null}
                  </View>
                  <Text
                    style={[
                      styles.comparisonPrice,
                      store.lowest && styles.lowestPrice,
                    ]}
                  >
                    {store.total}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <TouchableOpacity style={styles.routeBtn} activeOpacity={0.8}>
            <Text style={styles.routeBtnText}>Compare Routes & Drive</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  header: {
    height: 75,
    backgroundColor: "#D4EDBC",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 28,
    gap: 16,
  },
  logoGroup: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 6,
  },
  logo: {
    fontSize: 26,
    fontWeight: "800",
    color: "#111827",
  },
  subLogo: {
    fontSize: 12,
    fontWeight: "600",
    color: "#374151",
  },
  searchContainer: {
    flex: 1,
    maxWidth: 420,
    height: 42,
    backgroundColor: "#FFFFFF",
    borderRadius: 21,
    justifyContent: "center",
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  searchInput: {
    fontSize: 14,
    color: "#1F2937",
  },
  cartButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
  },
  cartButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1F2937",
  },
  mainLayout: {
    flex: 1,
    flexDirection: "row",
    padding: 24,
    gap: 24,
    maxWidth: 1300,
    width: "100%",
    alignSelf: "center",
  },
  leftColumn: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
    marginTop: 8,
    marginBottom: 14,
  },
  rowContent: {
    marginBottom: 24,
    gap: 14,
  },
  favCard: {
    width: 110,
    height: 70, // Slightly reduced height since there's no image
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    padding: 8,
  },
  favCardText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#374151",
    textAlign: "center",
  },
  storeCard: {
    justifyContent: "center",
    paddingHorizontal: 18,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#D4EDBC",
  },
  storeText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#1F2937",
  },
  dealCard: {
    width: 180,
    height: 110, // Adjusted height since image is removed
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 14,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  dealHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dealBadge: {
    fontSize: 10,
    fontWeight: "700",
    color: "#1B5E20",
    backgroundColor: "#C8E6C9",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  dealTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1F2937",
  },
  dealPrice: {
    fontSize: 16,
    fontWeight: "800",
    color: "#2E7D32",
    marginTop: 2,
  },
  rightSidebar: {
    width: 320,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    justifyContent: "space-between",
    alignSelf: "flex-start",
  },
  sidebarTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },
  sidebarSubtitle: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
    marginBottom: 14,
  },
  savingsBanner: {
    backgroundColor: "#FEF3C7",
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#FDE68A",
  },
  savingsText: {
    fontSize: 12,
    color: "#92400E",
  },
  comparisonList: {
    gap: 10,
    marginBottom: 20,
  },
  comparisonCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#F3F4F6",
  },
  lowestComparisonCard: {
    backgroundColor: "#E8F5E9",
    borderColor: "#A5D6A7",
  },
  storeMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  comparisonStoreName: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1F2937",
  },
  storeBadge: {
    fontSize: 10,
    fontWeight: "700",
    color: "#4B5563",
    backgroundColor: "#E5E7EB",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  lowestBadge: {
    color: "#1B5E20",
    backgroundColor: "#C8E6C9",
  },
  comparisonPrice: {
    fontSize: 14,
    fontWeight: "700",
    color: "#374151",
  },
  lowestPrice: {
    color: "#2E7D32",
    fontWeight: "800",
  },
  routeBtn: {
    backgroundColor: "#D4EDBC",
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: "center",
  },
  routeBtnText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#111827",
  },
});
