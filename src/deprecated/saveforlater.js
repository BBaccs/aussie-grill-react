
<Route
path={'/menu/index.html'}
element={
  <>
    <Menu />
  </>
}
/>
<Route
path={'/menu/handhelds/index.html'}
element={
  <>
    {/* <MenuPages menuData={dumbyData} dataTitle={'dumbydata'} /> */}
    <MenuPages menuData={handHelds} dataTitle={location.state} titleDescription={'100% USDA CHOICE BEEF'} />
  </>
}
/>
<Route
path={'/menu/largeplates/index.html'}
element={
  <>
    <MenuPages menuData={largePlates} dataTitle={location.state} />
  </>
}
/>
<Route
path={'/menu/salads/index.html'}
element={
  <>
    <MenuPages menuData={salads} dataTitle={location.state} />
  </>
}
/>
<Route
path={'/menu/sidesAndSnacks/index.html'}
element={
  <>
    <MenuPages menuData={sidesAndSnacks} dataTitle={location.state} />
  </>
}
/>
<Route
path={'/menu/kids/index.html'}
element={
  <>
    <MenuPages menuData={kids} dataTitle={'Kids'} />
  </>
}
/>
<Route
path={'/menu/dessertsAndBeverages/index.html'}
element={
  <>
    <MenuPages menuData={dessertsAndBeverages} dataTitle={location.state} />
  </>
}
/>