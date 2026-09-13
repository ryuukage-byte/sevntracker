-- ================================================================
-- SevnTracker Cloud Sync Schema
-- Jalankan query ini di Dashboard Supabase -> SQL Editor -> Run
-- ================================================================

-- 1. Buat tabel user_sync
CREATE TABLE IF NOT EXISTS public.user_sync (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    data JSONB NOT NULL DEFAULT '{}'::jsonb,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 2. Aktifkan Row Level Security (RLS) demi keamanan data per-user
ALTER TABLE public.user_sync ENABLE ROW LEVEL SECURITY;

-- 3. Hapus policy lama jika ada (mencegah duplicate error)
DROP POLICY IF EXISTS "Users can manage their own sync data" ON public.user_sync;

-- 4. Buat policy agar setiap user hanya bisa membaca dan mengubah datanya sendiri
CREATE POLICY "Users can manage their own sync data"
ON public.user_sync
FOR ALL
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- 5. Beri hak akses ke role authenticated dan anon (anon untuk API introspection)
GRANT ALL ON TABLE public.user_sync TO authenticated;
GRANT ALL ON TABLE public.user_sync TO service_role;
