import { ReactNode, createContext, useEffect, useState } from "react";
import { Movie } from "../../components/card/card";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestion } from "../actions";

export interface CartContextType {
    cart: Movie[];
    increaseQuantity: (movieId: number) => void;
    decreaseQuantity: (movieId: number) => void;
    removeProductFromCart: (movieId: number) => void;
    search: (query: string) => void;
    searchedCart: Movie[];
}

interface Props {
    children: ReactNode;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<Props> = ({ children }) => {

    const dispatch = useDispatch();
    const data = useSelector((state) => (state as any).question) as Movie[];
    useEffect(() => {
        dispatch(fetchQuestion());
    }, []);

    useEffect(() => {
        if (!data) { return }
        sort();
    }, [data]);
    const [cart, setCart] = useState<Movie[]>([]);
    const [searchedCart, setSearchedCart] = useState<Movie[]>([]);


    const sort = () => {
        const sortedMovies = data.sort((a, b) => new Date(a.release_date).toISOString() < new Date(b.release_date).toISOString() ? 1 : -1);
        setSearchedCart(sortedMovies)

    };

    const search = (query: string) => {
        const searchField = ['name', 'type', 'ratings', 'name_of_stars']
        const filteredMovies = data.filter( (movie) => {
            for (const field  of searchField) {
                const value = (movie as any )[field];
                const stringValue = typeof (value) !== 'string' ? value.toString() : value;
                if (stringValue.toLowerCase().includes(query.toLowerCase())) {
                    return true;
                }
            }
            return false;
        });
        setSearchedCart(filteredMovies); 
    }


    const increaseQuantity = (movieId: number) => {
        const updatedCart = [...cart];
        const itemIndex = updatedCart.findIndex((p) => p.movieId === movieId);
        if (itemIndex !== -1) {
            // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng
            updatedCart[itemIndex].quantity += 1;
        } else {
            // Nếu sản phẩm chưa có trong giỏ hàng, thêm vào giỏ hàng với số lượng là 1
            const productToAdd = data!.find((p) => p.movieId === movieId);
            if (productToAdd) {
                const newItem = { ...productToAdd, quantity: 1 };
                updatedCart.push(newItem);
            }
        }
        setCart([...updatedCart])
    };

    const decreaseQuantity = (movieId: number) => {
        const item = cart.find((p) => p.movieId === movieId);
        const updatedCart = [...cart];
        if (item!.quantity > 1) {
            const itemCart = updatedCart.findIndex((p) => p.movieId === movieId);
            updatedCart[itemCart].quantity -= 1;
            setCart([...updatedCart]);
        } else {
            removeProductFromCart(movieId);
        }

    };
    // const calculateTotal = (): number => {
    //     // Tính tổng giá trị của giỏ hàng (ví dụ: giả sử giá mỗi sản phẩm là "price")
    //     return cart.reduce((total, item) => total + Number(item.price) * item.quantity, 0);
    // };


    const removeProductFromCart = (movieId: number) => {
        setCart((prevCart) => prevCart.filter((item) => item.movieId !== movieId));
    };

    return (
        <CartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity, removeProductFromCart, searchedCart, search }}>
            {children}
        </CartContext.Provider>
    );
};