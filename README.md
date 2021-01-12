# React Native Infinite Scroll

Scrolling a list in react native can become pretty tidious if we do not take care of
performance aspects involved in the process.

Using the traditional scrollview is not viable options as it makes the scrolling really choppy
which inturn can hamper the experience of the user.

Here I have tried to demonstrate with the help of a simple expamle the power of flatList in
react native and the associate benefits which it brings with it.

Here is the screenshot of working demo

## ScreenShot

![alt text](https://icecube-eu-284.icedrive.io/thumbnail?p=mqEt%2FiBtQzeMVXOX11HQWJWTy99PSyzB6ElxM%2FfXVi%2FmbwbXfSPyrAO9zbRik7CCOWLbc3Z3M7vn69iNHln7xjKYZ%2FtPBoAGOFIeUmYT3ps9XQyIcut5ejv8ASS9knd0&w=1280&h=1280&m=cropped)

Also refer to this article: https://codingislove.com/optimize-react-native-flatlist-performance/
It is a great article and I highly recommend to go through it once to make buttery smooth UIs using react native.

API link: https://fakerapi.it/en

# Flatlist optimisation options and its tradeoffs

## windowSize

Pros: Setting a lower number will hugely improves render time and memory consumption

Cons: When you set a lower number for windowSize fast scrolling may result blank spaces

## removeClippedSubviews

When set to true it will unmount components off the viewport

Pros: By setting this prop to true there is always a little amount of items rendered which will improve performance of the list

Cons: The community reported some bugs such as missing content

## initialNumToRender

The number of list items rendered initially, this porp accepts number and it should be enough to fill the screen on all supported devices and not more. The default number is 10

Pros: A lower initialNumToRender will improve the initial render performance of list component itself

Cons: lower initialNumToRender will result in blank areas, so set a number that’s enough to fill the viewport in all supported devices, not more , not less

## maxToRenderPerBatch

maxToRenderPerBatch determines how many list items will be rendered on each scroll. The default value is 1

Pros: By setting a highermaxToRenderPerBatch you will receive a higher fill rate which results less blank spaces

Cons: A higher maxToRenderPerBatch would decrease your js performance

## updateCellsBatchingPeriod

As the name clearly says, it adjuts the time between each batch in ms, you should use this prop in combination with maxToRenderPerBatch to achieve your desired result. The default value is 50

Pros: Combining updateCellsBatchingPeriod with maxToRenderPerBatch will lead you to achieve your desired fillrate / performance (eg. load more items in a long period or load less items in a short period)

Cons: Pretty similar to maxToRenderPerBatch a lower updateCellsBatchinPeriod may cause js performance issues and a higher one would result blank spaces

## keyExtractor

If your list items have not a key prop by default you should write keyExtractor method. React will use the key prop to identify which items have changed , removed, or added to list.

# Optimising List Items in React Native

## Using simple list items

The most important thing to keep in mind when optimizing a list is that when there is a large list then you should always keep the list items simple and minimal. Use image thumbnails instead of the whole image as android is known to have issues with rendering multiple high quality images in a simple list. The memory consumption goes way to high and the lag and stutter is imminent to say the least.

## Use pure components for list items

PureComponent’s shallow props / state comparison means less re-renders which inturn increases the performance of the list items. If a single list item is rendering multiple times then it would become difficult to optimize a whole flatlist of n number of list items contained in it.

## Use extraData

When you have to update your list items use extraData

Feel free to star the project if you found anything useful here and do share feedback. It helps the community to improve. Lets contribute and improve together. Cheers.
