-- Veritabanı Sorguları

-- Posta kodu 1010 olan tüm müşterileri bulun
SELECT * FROM Customers
where PostalCode=1010
-- id'si 11 olan tedarikçinin telefon numarasını bulun
SELECT Phone FROM [Suppliers]
where SupplierID=11
-- Verilen ilk 10 siparişi, sipariş tarihine göre azalan şekilde listeleyin
SELECT OrderDate FROM [Orders] 
order by OrderDate DESC
limit 10
-- Londra, Madrid veya Brezilya'da yaşayan tüm müşterileri bulun
SELECT * FROM [Customers]
where City="London" or City="Madrid" or Country="Brazil"
-- "The Shire" için bir müşteri kaydı ekleyin, ilgili kişi adı "Bilbo Baggins", adres - "Bag End" içinde "1 Hobbit-Hole", posta kodu "111" ve ülke "Middle Earth"
Insert into [Customers] (CustomerName,ContactName,Address,City,PostalCode,Country)
Values ("The Shire","Bilbo Baggins","Bag End","1 Hobbit-Hole","111","Middle Earth")
-- Posta kodu "11122" olarak değişecek şekilde Bilbo Baggins kaydını güncelleyin
Update [Customers]
set PostalCode="111" ,PostalCode="11122"
where CustomerID=92
-- (Zorlayıcı Görev) Müşteriler tablosunda kaç farklı şehrin saklandığını keşfetmek için bir sorgu bulun. Tekrarlar çift sayılmamalıdır
SELECT DISTINCT City FROM Customers;
-- (Zorlayıcı Görev) 20 karakterden uzun adları olan tüm tedarikçileri bulun. Adın uzunluğunu almak için "length(SupplierName)" kullanabilirsiniz.
SELECT * FROM [Suppliers]
where length(SupplierName)>20