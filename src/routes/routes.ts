import {Router} from 'express';
import Link from '../controllers/links';

const router = Router();

router.post('/links',  Link.postLink);

router.get('/links/:code', Link.hitLink);

router.get('/links/:code/stats', Link.getLink);

export default router;